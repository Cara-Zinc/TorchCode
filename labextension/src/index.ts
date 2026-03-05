import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { INotebookTracker, NotebookPanel } from '@jupyterlab/notebook';
import { Dialog, showDialog, ToolbarButton } from '@jupyterlab/apputils';
import { LabIcon, refreshIcon } from '@jupyterlab/ui-components';

const GITHUB_REPO = 'duoan/TorchCode';
const GITHUB_BRANCH = 'main';
const TEMPLATES_BACKUP = '_original_templates';

const colabIcon = new LabIcon({
  name: 'torchcode:colab',
  svgstr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#E8710A" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>`
});

function getFilename(path: string): string {
  return path.split('/').pop() || '';
}

function getGitHubDir(filename: string): string {
  return filename.includes('_solution') ? 'solutions' : 'templates';
}

function getColabUrl(filename: string): string {
  const dir = getGitHubDir(filename);
  return `https://colab.research.google.com/github/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${dir}/${filename}`;
}

const COMMAND_RESET = 'torchcode:reset-notebook';
const COMMAND_COLAB = 'torchcode:open-in-colab';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'torchcode-labext:plugin',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterFrontEnd, tracker: INotebookTracker) => {
    console.log('TorchCode extension activated');

    app.commands.addCommand(COMMAND_RESET, {
      label: 'Reset to Template',
      caption: 'Reset this notebook to its original template state',
      icon: refreshIcon,
      execute: async () => {
        const current = tracker.currentWidget;
        if (!current) return;

        const path = current.context.path;
        const filename = getFilename(path);
        if (!filename || filename === '00_welcome.ipynb') return;

        const result = await showDialog({
          title: '🔄 Reset Notebook',
          body: `Reset "${filename}" to template state?\nAll your changes will be lost.`,
          buttons: [
            Dialog.cancelButton(),
            Dialog.warnButton({ label: 'Reset' })
          ]
        });

        if (!result.button.accept) return;

        try {
          const templatePath = `${TEMPLATES_BACKUP}/${filename}`;
          const template = await app.serviceManager.contents.get(templatePath, {
            content: true,
            type: 'notebook'
          });

          await app.serviceManager.contents.save(path, {
            type: 'notebook',
            format: 'json',
            content: template.content
          });

          await current.context.revert();
        } catch (err) {
          console.error('Reset failed:', err);
          await showDialog({
            title: 'Reset Failed',
            body: `Could not find template for "${filename}".\nMake sure _original_templates/ exists.`,
            buttons: [Dialog.okButton()]
          });
        }
      }
    });

    app.commands.addCommand(COMMAND_COLAB, {
      label: 'Open in Colab',
      caption: 'Open this notebook in Google Colab',
      icon: colabIcon,
      execute: () => {
        const current = tracker.currentWidget;
        if (!current) return;

        const filename = getFilename(current.context.path);
        if (!filename) return;

        window.open(getColabUrl(filename), '_blank');
      }
    });

    tracker.widgetAdded.connect(
      (_sender: INotebookTracker, panel: NotebookPanel) => {
        const colabButton = new ToolbarButton({
          icon: colabIcon,
          tooltip: 'Open in Google Colab',
          label: 'Colab',
          onClick: () => app.commands.execute(COMMAND_COLAB),
          className: 'torchcode-colab-button'
        });
        panel.toolbar.addItem('torchcode-colab', colabButton);

        const resetButton = new ToolbarButton({
          icon: refreshIcon,
          tooltip: 'Reset notebook to template state',
          label: 'Reset',
          onClick: () => app.commands.execute(COMMAND_RESET),
          className: 'torchcode-reset-button'
        });
        panel.toolbar.addItem('torchcode-reset', resetButton);
      }
    );
  }
};

export default plugin;

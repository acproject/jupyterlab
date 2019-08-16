import { Widget, Panel } from '@phosphor/widgets';
import { ToolbarWidget } from '../utils';

export class BreakPointsWidget extends Panel {
  readonly header: Panel;
  readonly label: Widget;
  readonly body: Panel;
  readonly toolbar: ToolbarWidget;

  readonly model_header = {
    label: 'BreakPoints',
    class: 'jp-DebuggerSidebarVariables-header'
  };

  constructor() {
    super();

    this.header = new Panel();
    this.header.addClass(this.model_header.class);
    this.addWidget(this.header);

    this.label = new Widget();
    this.label.node.textContent = this.model_header.label;
    this.label.addClass(this.model_header.class + '-label');
    this.header.addWidget(this.label);

    this.toolbar = new ToolbarWidget();
    this.toolbar.createSpanElement(
      'fa fa-breakpoints disactive',
      'Deactive All Breakpoints'
    );
    this.toolbar.createSpanElement('fa fa-remove', 'Remove All Breakpoints');
    this.header.addWidget(this.toolbar);
  }
}

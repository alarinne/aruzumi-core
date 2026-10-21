import { Component, signal } from '@angular/core';
import { NAME_BANNER } from './ascii/name-banner';
import { CRESCENT } from './ascii/crescent';
import { COMMAND_LIST } from './terminal/command-list';

interface TerminalEntry{
  command: string;
  output: string;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aruzumi-core');
  readonly nameBanner = NAME_BANNER;
  readonly crescent = CRESCENT;
  readonly history = signal<TerminalEntry[]>([]);
  readonly commands = COMMAND_LIST;

  executeCommand(input: HTMLInputElement): void {
    const command = input.value.trim();

    if (!command) {
      return;
    }

    const output = command === 'help'
      ? ''
      : `Command not found: ${command}. Type help.`;

    this.history.update(entries => [...entries, { command, output }]);

    input.value = '';
  }
}

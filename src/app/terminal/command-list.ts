export interface CommandInfo {
  name: string;
  description: string;
}

export const COMMAND_LIST: CommandInfo[] = [
  { name: 'help', description: 'show available commands' },
  { name: 'whoami', description: 'a brief introduction' },
  { name: 'character', description: 'meet my terminal self' },
  { name: 'work', description: 'my development journey' },
  { name: 'education', description: 'where I studied' },
  { name: 'hard skills', description: 'tools of the trade' },
  { name: 'soft skills', description: 'how I work with people' },
  { name: 'projects', description: 'things I build' },
  { name: 'favorites', description: 'things I love' },
  { name: 'links', description: 'find me elsewhere' },
  { name: 'matrix', description: 'follow the white rabbit' },
  { name: 'fairytail', description: 'a little guild magic' },
  { name: 'quest', description: 'uncover a hidden fact' },
  { name: 'cat profile', description: 'read my full profile' },
];

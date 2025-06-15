
declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLElement, options: VimeoPlayerOptions) => VimeoPlayer;
    };
  }
}

interface VimeoPlayerOptions {
  id: number;
  width?: string | number;
  height?: string | number;
  responsive?: boolean;
  controls?: boolean;
  title?: boolean;
  byline?: boolean;
  portrait?: boolean;
  autopause?: boolean;
  background?: boolean;
}

interface VimeoPlayer {
  ready(): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  setCurrentTime(seconds: number): Promise<number>;
  on(event: string, callback: () => void): void;
}

export {};

export type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface AnimationConfig {
  enabled: boolean;
  timingFunction: TimingFunction;
  transitionDuration: number;
}
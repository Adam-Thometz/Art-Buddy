import boing from "_media/jump-into-rhythm/boing.mp3";
import { Buffer } from "tone";

export function createBuffers() {
  window['boing'] = new Buffer(boing);
};

export function removeBuffers() {
  delete window['boing'];
};
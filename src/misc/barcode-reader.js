// @ts-check
import { BrowserBarcodeReader } from '@zxing/library';
const codeReader = new BrowserBarcodeReader();

/**
 * getAvailableSources
 * @param {Function} onResult
 * @description will invoke the callback 'onResult' with the result of
 * available sources
 */
export async function getAvailableSources(onResult) {
  let sources = [];
  try {
    const videoInputDevices = await codeReader.getVideoInputDevices();
    videoInputDevices.forEach(device => {
      sources.push(device.label);
    });
  } catch (error) {
    sources = error.message;
  } finally {
    onResult(JSON.stringify(sources));
  }
}

// <VideoInputDevice[]> videoInputDevices
function getDeviceId(videoInputDevices = []) {
  if (videoInputDevices.length > 1) {
    return videoInputDevices[1].deviceId;
  }
  return videoInputDevices[0].deviceId;
}

async function decodeFromVideo(deviceId, videoId, onResult) {
  try {
    const result = await codeReader.decodeFromInputVideoDevice(
      deviceId,
      videoId
    );
    onResult(JSON.stringify(result));
  } catch (error) {
    onResult(error.message);
  }
}

export async function getInputDevices(onResult, videoId) {
  try {
    const videoInputDevices = await codeReader.getVideoInputDevices();
    const deviceId = getDeviceId(videoInputDevices);
    decodeFromVideo(deviceId, videoId, onResult);
  } catch (error) {
    onResult(error.message);
  }
}

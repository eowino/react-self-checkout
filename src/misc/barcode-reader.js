import { BrowserBarcodeReader } from '@zxing/library';
const codeReader = new BrowserBarcodeReader();

export async function getInputDevices(onResult) {
  try {
    const videoInputDevices = await codeReader.getVideoInputDevices();
    videoInputDevices.forEach(device => {
      const firstDeviceId = videoInputDevices[0].deviceId;

      codeReader
        .decodeFromInputVideoDevice(firstDeviceId, 'video')
        .then(result => {
          console.log(result);
          if (onResult && typeof onResult === 'function') {
            onResult(result);
          }
        })
        .catch(err => console.error(err));
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getBarcordeFromImage(image, onResult) {
  const img = document.querySelector(image);
console.log(img);
  codeReader
    .decodeFromImage(img)
    .then(result => {
        console.log(result);
        // onResult
    })
    .catch(err => console.error(err));
}

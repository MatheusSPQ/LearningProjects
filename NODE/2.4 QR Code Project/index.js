/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from 'node:fs/promises';
import { input } from '@inquirer/prompts';
import qr  from "qr-image"

const url = await input({ message: 'Escreva a URL que deseja converter para QR-Code' });

fs.writeFile("./imagem.png", qr.imageSync(url, { type: 'png' }));

fs.writeFile("./URL.txt", url);

var a = {message: "FOI!"}
console.log(a.message)




<div align="center">
  <h1> &#x1f941; Beat Pi</h1>
    <h4>
      Create and manage beats in Sonic Pi through a graphical interface
  </h4>
  <img src="https://raw.githubusercontent.com/ricardotormo/beat-pi/master/doc_images/add_samples.gif" width="49%" />
  <img src="https://raw.githubusercontent.com/ricardotormo/beat-pi/master/doc_images/edit_sample.gif" width="49%" />
</div>

## Prerequisites

Before you start, you need to have **Node.js** and **Sonic Pi** installed on your computer.

To download node you can use this link: 

   https://nodejs.org/en/download/

To download Sonic Pi use the following link:

   https://sonic-pi.net/

This project was tested on:

- Node version: 8.14.1
- Sonic Pi version: 3.2
- Chrome browser version: 81.0.4044

If you encounter any problem running this project, make sure you are using
the same versions as above.

## Installation

1. Download or clone this repository on your computer

2. Navigate into the project you just downloaded, copy the beatPadPi.rb file and paste it into Sonic Pi.

3. Once pasted in Sonic PI, press play
   
   ![play_sonic_pi](doc_images/play_sonic_pi.gif)

4. Open a terminal and navigate to the folder you downloaded:

   ```shell
   cd your_folder
   ```

5. Type :

   ```shell
   node server
   ```

6. Open another terminal (still in the same path) and type:

   ```shell
   npm install
   ```

7. When the installation is complete, write:

   ```shell
   npm run serve
   ```

8. Click the link that appears in your terminal to open the app:

   ![](doc_images/open_app.gif)

## Configuring your ports

If you want to configure app ports, you can rename .env.example to .env and modify the values.
  
## Built With

* Node.js - Used to to send data to Sonic Pi
* Vue.js - User interface and interaction with the app
* Sonic Pi - Magic happens here :)

## Authors and contributors

Author: **RicardoTormo** - *Idea and main developer*

Contributor: **AdrianiFs** https://github.com/AdrianiFS - *CSS and UI help* 

## Help us to improve this project

If you find a bug or you want to contribute to this project, please read the CONTRIBUTING.md.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

I would like to say thanks to the awesome members of Sonic Pi's community. They've helped me a lot.
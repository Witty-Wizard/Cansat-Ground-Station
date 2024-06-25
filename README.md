   > [!NOTE]
   > This project is going under major structural changes and till then it will remain in public archive 
   
   # CanSat Ground Station

   Welcome to the CanSat Ground Station project! This project aims to develop a comprehensive ground station for monitoring and controlling a CanSat mission using modern web technologies. In this introduction, we'll provide an overview of the key technologies and tools used in this project.

   ## Table of Contents
  - [Introduction](#introduction)
  - [Data Format](#data-format)
  - [Tech Stack](#Tech-Stack)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Documentation](#-documentation)
  - [License](#license)


   <div align="center">
    <a href="https://discord.gg/Wwhjfx6dJG"><img src="https://img.shields.io/discord/1013056365884878858?color=%235865F2&logo=discord&logoColor=%23FFFFFF&style=flat" alt="Discord"></a>
    <a href="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml"><img src="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml/badge.svg" alt="Build"></a>
    <a href="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml"><img src="https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml/badge.svg" alt="Documentation"></a>
    <img src="https://img.shields.io/github/v/release/Gagan-Space/Cansat-Ground-Station" alt="GitHub Release">
    <img src="https://img.shields.io/github/license/Gagan-Space/Cansat-Ground-Station" alt="GitHub License">
    <img src="https://img.shields.io/github/stars/Gagan-Space/Cansat-Ground-Station?style=flat" alt="GitHub Repo stars">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Gagan-Space/Cansat-Ground-Station?style=flat">
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/Gagan-Space/Cansat-Ground-Station">
    <a href="https://gitpod.io/#https://github.com/Gagan-Space/Cansat-Ground-Station"><img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?style=flat&logo=gitpod" alt="Gitpod"></a>
</div>

## Introduction

Welcome to the CanSat Ground Station project! This project aims to provide a ground station software for CanSat projects using Vite and React.

## Data Format

Telemetry data collected from the CanSat payload is transmitted to the ground station in a structured format.

- **Byte[0] Data Header, 0x0F**
- **Byte[1-47] Telemetry Data :**
  - packetCount (4 bytes)
  - mode (1byte)
  - state (1byte)
  - altitude (4 byte)
  - temperature (4 byte)
  - pressure (4 byte)
  - voltage (4 byte)
  - gpsTime (4 byte)
  - gpsLatitude (4 byte)
  - gpsLongitude (4 byte)
  - gpsSats (1 byte)
  - tiltX (4 byte)
  - tiltY (4 byte)
  - rotZ (4 byte)
- **Byte[48] Data Footer, 0x00**

## Tech Stack
- React, Vite,  Redux, Three.js, Storybooks, Docker, Dockeer-Compose, DevContainer

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js, npm and yarn installed on your local machine.
- Git installed on your local machine.

### Installation

1. Clone the repository to your local machine:

   ```sh
   https://github.com/Gagan-Space/Cansat-Ground-Station.git
   ```

2. cd cansat-ground-station

   ```sh
   cd cansat-ground-station
   ```

3. Install dependencies:

   ```sh
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```sh
yarn run dev
```


### Installation with Docker

To start project locally through docker, run:

1. After clonning the repository change directory to cansat-ground-station
   ```sh
   cd cansat-ground-station
   ```
2. Build Dockerfile:
   ```sh
   docker build -t gagan .    
   ```
3. Run the image:
   ```sh
   docker run -p 5173:5173 gagan
   ```
4. Server is started on this url ,if followed all steps correctly:
   ```sh
   http://localhost:5173/
   ```

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix:

   ```sh
   git checkout -b feature/my-feature
   ```

3. Make your changes and ensure they follow the project's coding style.
4. Commit your changes with descriptive commit messages:

   ```sh
   git commit -am "Add a new feature"
   ```

5. Push your branch to your fork:

   ```sh
   git push origin feature/my-feature
   ```

6. Finally, open a pull request on the original repository's main branch.

#### Contibuting Guidelines 
  We believe in the power of collaboration. If you have ideas to improve Consat-Ground-Station , feel free to contribute! Check out our [Contribution Guidelines](https://github.com/Gagan-Space/Cansat-Ground-Station/blob/main/CONTRIBUTING.md) to get started.

### 📄Documentation

Explore our comprehensive documentation in the [LEARN.md](https://github.com/Gagan-Space/Cansat-Ground-Station/blob/main/Learn.md) file, which serves as a detailed guide to understanding and contributing to Consat-Ground-Station. This document covers various aspects of the project, including setup instructions, architecture overview, and contribution guidelines. We recommend referring to this documentation to gain a deeper insight into UniCollab and make meaningful contributions to its development.


## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.

### Message From PA

Welcome to Consat-Ground-Station!

We're glad you're here and excited for you to explore our project. Whether you're checking out the code, contributing to the project, or providing feedback, your presence and input are invaluable.

Feel free to dive in, get involved, and make Consat-Ground-Station even better!
🌟 **Enjoy exploring the world of tech with Tech Stuffs!**

Happy coding!


<div>
 
<h2 align = "center">Our Contributors ❤️</h2>
<div align = "center">
 <h3>Thank you for contributing to our repository</h3>

<a href="https://github.com/Gagan-Space/Cansat-Ground-Station/graphs/contributors">
<img src="https://contributors-img.web.app/image?repo=Gagan-Space/Cansat-Ground-Station" />

</a>

### Show some ❤️ by starring this awesome repository!

</div>

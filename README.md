

1. To install docker image
    Open your command prompt and write
    ` docker pull rosmery1089425/temperatures-api-docker:latest
    `
2. To run docker image
    After installing the image write in your command promt:
    `
    docker run -d -p 4000:3000 temperatures-api-docker
    `
    Then open POSTman or your browser and type the next url:
        'http:/localhost:4000/temps/api/?q=40+c+to+f'
FROM node:20-slim

USER node

RUN mkdir /home/node/type

WORKDIR /home/node/type

RUN mkdir /home/node/type/node_modules

CMD [ "/home/node/type/.docker/dev.sh" ]

# if we use node instead of ubuntu we don't have to install the node.js manually


FROM node 

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT ["node", "index.js"]
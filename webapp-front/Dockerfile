FROM node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run-script build
RUN npm install -g serve
CMD serve -s build
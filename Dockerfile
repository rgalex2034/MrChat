FROM node:latest
WORKDIR /app
RUN npm install -g nodemon
EXPOSE 80
CMD ["npm", "start"]

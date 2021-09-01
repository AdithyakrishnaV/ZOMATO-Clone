FROM nginx:alpine;

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://Adithyakrishna_V:adi01mongodb@zomato-master.fuo8s.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=266119925644-jhoshk1h6b0bl01kif8aiem0oht9bq3o.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=0G4qQOoAy6aa-KETBCXorVwo
ENV AWS_S3_ACCESS_KEY=AKIA2G4RARAPZOQ3EM2Y
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API__KEY=0aee4ef916ba1200c3fac2d97c315d05-fb87af35-24f242e2
ENV MAILGUN__DOMAIN= sandbox5832b2d6ed7e4413ab7ea90ecf51fc65.mailgun.org
ENV RZR_PAY_ID=rzp_test_Bko7CCqMhkTuMt
ENV RZR_PAY_SECRET=65Tp196q6c6qWaFfZh1r9A87

CMD ["npm", "run", "start"]
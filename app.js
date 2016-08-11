var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var firebase = require('firebase');
firebase.initializeApp({
    serviceAccount: {
        "type": "service_account",
        "project_id": "cloud-engine-6fad0",
        "private_key_id": "43e547008256689186f857e84048262254eee5a9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCy42H7xdHs1WVu\njDpCkxA3vEGmzVo++O6euIDWKoJzTAJumlLkOff6bW/32ma5DIjlPBCN8v/MJiaf\n4Cs9DRJiwzVrAJgb+VTFHBigVjVCxeU0fns5/4hUI3PA6MmHrUGA4OCuXLBK/rP4\n4N51R5jiRNqFAKpb8I0BLyqIiEmK5oxQTVqnz1Fb37UWpBo3F7CgZZaLr2G0Y2a9\nKlkj1SBT0a2kZ4g0VaKnXoR0wdMAfwYPwqTqMZlRfPrtOoCYm4TQS9yvIjMvVT8p\nS1b9HUQrFOCW8Q1+YIcup9NpGsGtrU+/4Dxq+MaIDc/drI2y77yZRGPZ3Bc8QGVv\nG72MSqn1AgMBAAECggEAREkqKQq9dLOM8aMTxkAPK8dwJDU1Yt5xcCMsAxTdERgN\nwZylUbuTHoRR/oHfPno7c433H8iHvq09hz/yIW7w+sRbisoCRoNpyYhNGj9uO1wB\nf4VckqoppzyVPilebK1FWOX+vnBhV29c0f88y/YVtSHlbGnxngD4QmB30wB7Wkq9\nNCkSQYERANt9W0iVWAzQqXXoW3PzHsXCbVUJeO2X/v3UOLErU9SrvgKCEKR/J+Kd\nCDejTWy1bJDV9s3FfmzrxVk2+JZksNUEw9PdDuMyVVpU1pHcsy3y1Oztgj21mlUf\nCCgMMgNXcFh+37LnE5/awgb2mVzj5WVaKDeyrKpmTQKBgQDtpNamNcSpw8zW8idy\nYtUlgHHLHh0fRBq9hj2bFGdJcwYXPF2KVBPDtrcAUWZGsvhitQGh7swtN6Li038V\n4OzlDqMnP4PqWfSeXJtBM/0MF7Xu3uNs5Cs7DjRtJoN7YttrNEyBqbcrQ6Cxj3vZ\n2wV/kDdGqmZk2qgOy1hLVQRsLwKBgQDAtLYn26ntQEok+lutpS+yd9FPp9sH8wr5\nY7XFxB+ZKrh1tN1dflj7P3d4pRYb09uAZnGGu1ZUgDM9LbMQS9zQYZIm3w1pmO8Q\n4jYzVLuN6j9qDODDT/s26jp1V4aGUeoJ/C4+rbyCzaRK7gMd2jKaQnOCd/yOLxzp\nfP3wd6uPGwKBgCwJ/SFGG5DeUSqQK5E+EYPmnq/mf70YkOAIbYg8qrtoznsl26vT\n0unVBWrQquR1LCSWqJvKthm3Er94NDfou93i7YdLdPXL/9INFVRq/vzrs/J1aa33\nRq+l/T8xAPKvqjvesELjIaep27CsB2ai+Qzfu+6ji2ArSTOcqVskgTJPAoGAJx9I\n79SXrfPkWZd+L0We5lOO6eYBAJ8l9jV4/LpxU84pfrQGUOnKtM9QuOyDDYk4QdwK\nZjj4MNWKEXyKot9T5/Y3Dq8v8OU8e6gBKvCj1w7cavJMWzqMnLx2u8XWKMTOh9Jr\nrQvmfoOzPAcQGOpoZYriGnWzj0YfT4OxpjUVXksCgYEAodgXxqw1cZk/dKFR5dYg\nLDmorQWko6A+b7KCX4jk38yGXI1vGY92IuTQY5656F4uvZmv6iTG5cfeRE6Q5Ler\n8pTWkViM6T8MnXv2KtxAHaphmsGszxUpaEpoqh/5FcS3woiJaFcNXzNNIQbI4xO/\nIRadbVj6WVALo4S+onHgQMA=\n-----END PRIVATE KEY-----\n",
        "client_email": "test-38@cloud-engine-6fad0.iam.gserviceaccount.com",
        "client_id": "104315491324183456336",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-38%40cloud-engine-6fad0.iam.gserviceaccount.com"
    },
    databaseURL: "https://cloud-engine-6fad0.firebaseio.com"
});
var db = firebase.database();
var ref = db.ref();
var projectId = process.env.tutorial2 - 1470427656482;
var gcloud = require('gcloud')({
    projectId: projectId
});

var app = express();
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/schedule', require('./sub.route')(firebase));
app.get('/', function(req, res) {
    console.log('Fuck yoooouuuuu!!!!!!');
    ref.on('value', function(snapshot) {
        console.log(snapshot.val());
    }, function(error) {
        console.log('The read failed: ' + error);
    });
    res.json({ message: 'Alright, alright...' });
    res.end();
});

var port = '8080';
server.listen(port, function() {
    console.log('Listening on port: ' + port);
});
module.exports = app;

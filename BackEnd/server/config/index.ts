import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const config = {
	port: process.env.PORT || 3000,
	databaseUri: process.env.DATABASE_URI || 'mongodb://localhost:27017',
	jwt: {
		privateKey: fs.readFileSync(process.env.JWT_PRIVATE_KEY as string, 'utf-8'),
		publicKey: fs.readFileSync(process.env.JWT_PUBLIC_KEY as string, 'utf-8'),
		passphrase: process.env.JWT_PASSPHRASE,
		expireSession: process.env.JWT_EXPIRE_SESSION || '5m',
	},
};

export default config;
/*----------API KEY PRIVATE-------------
MIIEpQIBAAKCAQEAwGx2UjL2t7VWafTGKaNsWUXfVYv9xrqAwkNCrJcmDdJ8Imsj
FJGmTdTh06MQH8PPa73oIGUjV1BIAOfjNw1ssG1zwawHy2QJfyMYTMryeX4ZjINd
tFSZow6x9W8hy4GecrUP0XM5xw2n97ucBE/ikudo3zvjIEBIZCw6mf7Z1RjsXdUb
mELACWzMwr0osqg+ByZ3ljxIGrgYTNJ2n/2hOWro6Z3erAJEHmErp4gM4fcyKA48
+1Om2FtIN7YJCODCoCbJ4awgqDsu4ecXfXzjBWkVt/fKANc8rVA4U34pfKnHmAfo
s92HYA5+AkhJtGQ3bqFDpxnq7OYhri96PE7DFwIDAQABAoIBAHOjewPxHrXOY40v
jbtOO/n2dL37cFpykJiuRS5lc3gRC4q/qghdc30It2Ixd6ovScLtEMgPH8sEMxFg
Sfs2tR/d1xgH43NGvjJKi/ryZ/+9WWtJMxIBWYdVeHsP+1ZKokc7KrNrtMg8G7pU
Y/FvdLFmIm8tlVQ3bYnNzrXnI0/dKypdJMvfVMhqHCZCouwVL6NvVNCVnAylBHtZ
cUeaHrWXDfDrtMfJKyooezEgHFqkzoilsDo7ZTXIWJ8rACf5bXQ/Q48mAdWbWCoY
ev8RPI7ui6/Sq0pAqvUfum2ZaBdssddnQaqYY54r2d0AbOj1YOxbX1N7nGA96dNg
5Z5x4JECgYEA95lAuFXUjyA8pE+DvyD7nxZTdsIl+cTwK9wqGyRkhfAQ740186H3
2g+xGaQWCOHRn9mcE96eiw5XdMaCbnqQy0IKcY1xjAslKe8Uvs+6oen8hj2chmwa
83hYHWl5v/mJNwNkAYb9Tg8RxIURjPoeoMYMeOJ7n2fw3yNRNJcBSTkCgYEAxvPv
qKcYGFsUqNxFaPq4FQIORkfkzGFUth4ii6qisST6tsuW8nV90IHbH6jNQjThNDra
izxWrlyNafo1rn3Kz/KXMfG39uN/qGSf9vzV5J/7rArzp331wc00ypyd9/qamxjN
hYwWKlzkXNIK6KHX23tH/1PU9DGU2+MWUi6O/s8CgYEAvDJ6pSJoPJoOPf5Kb76M
Q3He4wfTgbQVseDZCGRzG/NLjCnTdmoIUHFY9dpo/TtX8J6hKeEutRejlhlFDuCO
qlB6S7FtOztFdkhJhneyrluCHC88iFgnbCRvJXwElM0BZRVosFiAtRJzOOLEYlnD
agTfegr8WD/TMGhR0x1sVtECgYEAwYG7pV84aWAVXRQ5kpzhdNV2Cteca0lzulrf
INdLvF6KWEb2v0aVo7rZ5RYq5m1GaaWgsPJ0IM02YlCR6/C/1bhPZK2FT+YAYUnV
6MYMSH1urOxOBqfV47Ty1uq0HuCphZb/NxiE6plFKB7Hq3LW38wtv+LK6uRas/BQ
4ogUXzMCgYEAjL3Mhmxd+hq06u4UbqxBVVLuMdqPhAvfzTo/OLueaQyaUHns/Zyp
19tcH/ICb0NNCUB3bYu3GONvIdpVHe9DqHConMqRViPUEncKpwSlT91RUNEiKDFU
EBTstvY797YyiAW0dmnZMQHYiVCsKKjnbyuUG51upqjWgKVKYpkP7lM=*/

/*----------------API KEY PUBLIC-------------
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwGx2UjL2t7VWafTGKaNs
WUXfVYv9xrqAwkNCrJcmDdJ8ImsjFJGmTdTh06MQH8PPa73oIGUjV1BIAOfjNw1s
sG1zwawHy2QJfyMYTMryeX4ZjINdtFSZow6x9W8hy4GecrUP0XM5xw2n97ucBE/i
kudo3zvjIEBIZCw6mf7Z1RjsXdUbmELACWzMwr0osqg+ByZ3ljxIGrgYTNJ2n/2h
OWro6Z3erAJEHmErp4gM4fcyKA48+1Om2FtIN7YJCODCoCbJ4awgqDsu4ecXfXzj
BWkVt/fKANc8rVA4U34pfKnHmAfos92HYA5+AkhJtGQ3bqFDpxnq7OYhri96PE7D
FwIDAQAB*/
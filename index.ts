
import { events } from "bdsx/event";

let VotifierServer = require('votifier-server')

console.log('[plugin:Votifier] allocated');

let votifier = new VotifierServer('-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIEowIBAAKCAQEAyCIV9HnMgIHmZXriXHpiITITXae+Y+fg8hvzcBGtDb8Pq+pD\n'+
'IcMKhwWbbmqsIWLX/hmgNofR7nYGMJY01jJ4QPnrOx827e9+o6tV34udllp7JUOH\n'+
'0lWACym0xDKjUrDbT1tRlfBy4ThOgRr8RDVVkVWlhHpdCBqDZ9z4iI6Td3dSA7eB\n'+
'8KtVglwc1prdORWLn4NNmPFeK0LMrANXtVeH62e3qnSf1YZSN1MH3UuccG13Jjay\n'+
'72teAewh+5GLRg/AOlgeHi0OaVGQUizDEBOBFQ8alCLfnRv04+adb3zuKHvEoX8e\n'+
'xDSlMBGqhHoTN3ScWQFh4/QjskMkZixm5H9oMQIDAQABAoIBADZVCqDUcDBzE5l5\n'+
'QvrYPsvETH2gjI+S4/7Wl8BVDCYvOJHzh0YjLTh6zTesvg5SR1E0o8oqFVQntoZ6\n'+
'QN3l1b/OGY5zavYtjrPgT+/gd2faKJR1QOpZS+m76Nda5/wLB38Dy6JpJMcAAlAK\n'+
'g3IBCLnsBoNwtND+Ya5QzyhDjMVhpHtwi9jXZg94MdkH47WeY2btUAEaBIH7492x\n'+
'jsTJcQQJJrKTt78iTe6H0WSQvsMOOnREIbLqudIhS5H5T79hosWpAVD1fBr5UGnK\n'+
'VFdC1JW0A/jq/xUalKucLZLNShrO4OXf5BkJbp+sgWYhmsDM1N2zncTHU9pJRXuE\n'+
'7aRI6AECgYEA42tHCTb0x/NeWP9r/Dc2Tili2D2/IY/td8ZBQyQy4UIgdaejGp26\n'+
'1QLfIFMqctKUGYXYvmgWZ+3fH12AAsjkWDMbbyjyHOkfBpEWV8RjLwC1P7nanbOx\n'+
'OQEOLg82Y9ugVTnHqb2yotjXGXki2A2gRIUZnyWwg4Qapun9Nm1ZcK0CgYEA4Ujx\n'+
'SaBXuEemQ5e70WN0D1d/cBWG4B4XFtTf1D7WhjyzTgsvwqUAtg5iaL4gp31ulNej\n'+
'n/Ahq4icPNClTpRmxWQTJOpP72wXNXNZq0XUhjc4VZoRHurjr9NopfOwBgoyDuBW\n'+
'n3yk5EgayAcnVV+XQR1zzA+v7uQR7q6umNnREhUCgYAXOMkUI8xy7mLf65T3OBwP\n'+
'dyJkukld//hblp7rYDLh1YLDAM8i1KBTR+vIvTVEbEQ7JvOu3aoMCroR1dZQcnr+\n'+
'lplijGfMk/FbFk2VwLPwBL59N1kfaU3baEQuZ9dB8xc4HKJKrtgi0MmGDFyGez22\n'+
'QXEQUyTnCQI/sPzuJdRQMQKBgFqd1XgxB7e3EjiT+tchctiM8FSsRAE3+T+Uxqd/\n'+
'0xhRqCnXNBHN/vg71vecqlPUjztNdaJqm5B8taN8pVFzPddeBplNqnN6fedhC4tp\n'+
'3i9SXNWJ0CMohgb+OVSvLXlwdmwnbpBeOZEdM7CLuBWOCrAFYcON981WbaQdHVuc\n'+
'GY11AoGBAKdyFsq6kxlabFCA+KMzneZz9zAZzBWbH3LK5mjmszEtjYYZ0whTPBJb\n'+
'79wZhKZrJYjEtpomemGp1qhIka4VeCb/9jkFNbCwk91usqa4S6wZkfxpzZuLonr9\n'+
'xpMScJKCJkLCxL+Kpr0qeggdp26vbFnRgzCwkkdpTfTQ2YXUA9ph\n'+
'-----END RSA PRIVATE KEY-----'
, 19158);
console.log('server created');

events.serverOpen.on(()=>{
    console.log('server opened');
    votifier.on('vote', function (username: String, server: String, ip: String, date: Date) {
        console.log('server voted');
        console.log(username);
        console.log(server);
        console.log(ip);
        console.log(date);
    });

    votifier.on('error', function (err: any) {
        console.error(err);
    });
});

events.serverClose.on(()=>{
    console.log('[plugin:Votifier] closed');
});


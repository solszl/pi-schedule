const { exec } = require('shelljs');

const pkg = require('./package.json');
const X86 = 'X86_64';
// const M1 = 'arm64';

const tag = `${pkg.version}`;
const name = `${pkg.name}`;

// 根据不同平台添加不同参数
const { stdout } = exec('uname -m');
const param = stdout === X86 ? `` : ` --platform linux/amd64 `;
exec(`docker build ${param} -t ${name}:${tag} .`);

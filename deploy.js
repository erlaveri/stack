const Shellit = require('shellit');


const sh = new Shellit();

sh.setUp({
  host: '192.168.56.102',
  user: 'ubuntu',
  projectPath: '/srv/www/stack',
});

sh.task('apt:full-upgrade', async function () {
  await sh.remote(
    'sudo apt update && ' +
    'sudo apt full-upgrade -y && ' +
    'sudo apt autoremove -y && ' +
    'sudo apt autoclean -y');
});


sh.task('setup', function () {
  sh.start('full-upgrade');
});

sh.task('add-linux-user', async function () {
  let cmds = [`sudo adduser ${sh.conf.user} --disabled-password --gecos ""`];
  cmds.push(`cd /home/${sh.conf.user}`);
  cmds.push(`sudo mkdir -p .ssh`);
  cmds.push(`sudo .ssh/authorized_keys << ${sh.conf.sshKey}`);

  await sh.remote();
});


sh.start('apt:upgrade', 'apt:clean');
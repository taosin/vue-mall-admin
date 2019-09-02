const inquirer = require('inquirer');
const fs = require('fs');
fs.readFile(__dirname+'/template.vue', 'utf-8',(err, data) => {
    fs.writeFileSync(__dirname + "/page.vue", data, {flag:'a',encoding:'utf-8',mode:'0666'})
});
// 人机交互
var question = [{
    type: 'list',
    name: 'cmd',
    message: 'choice type',
    choices: [
        'init-component',
        'init-page',
    ]
}]

inquirer.prompt(question).then(answer => {
    // 执行选择的命令
    runCMD(answer.cmd);
});

function runCMD(cmd) {
    let run_question = {
        type: 'input',
        name: 'name',
        message: 'please set name'
    };
    let method_type = cmd

    inquirer.prompt(run_question).then(answers => {
        init(method_type, answers.name);
    });
}

function init(type, name) {
    if (name == '') {
        return console.log('\n 名称不能为空');
    }

    name = name.substring(0,1).toUpperCase()+name.substring(1)
}
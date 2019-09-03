const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
let srcPath = path.resolve('./src');

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
        console.log('\n 名称不能为空');
        return;
    }

    let [folder_name, file_name] = name.split(' ')
    console.log(folder_name, file_name);
    let folder_path = `${srcPath}/views/${folder_name}`
    let is_exist_folder = fs.existsSync(folder_path) || false;
    if (!is_exist_folder) {
        fs.mkdirSync(folder_path);
    }
    let file_path = `${folder_path}/${file_name}.vue`
    let is_exist_file = fs.existsSync(file_path) || false;
    if (is_exist_file) {
        console.error("\n  该页面已存在");
        return;
    }
    fs.readFile(__dirname + '/template.vue', 'utf-8', (err, data) => {
        fs.writeFileSync(`${folder_path}/${file_name}.vue`, data, { flag: 'a', encoding: 'utf-8', mode: '0666' });
    });
    console.log('\x1b[36m%s\x1b[0m', "\n  页面" + file_name + "完成初始化！");
}
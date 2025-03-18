let msg;
dia = 'Terça';

switch(dia){
    case 'Segunda':
        msg = 'Começo da semana';
        break;
    case 'Terça':
        msg = 'Dia de Senai! Força!';
        break;
    case 'Quarta':
        msg = 'Último dia de Senai da semana!';
        break;
    default:
        msg = 'Outros';
        break;
}

console.log(msg)
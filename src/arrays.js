const alunos = [
    {nome: 'Clara', nota: 3},
    {nome: 'Carlos', nota: 1},
    {nome: 'Paula', nota: 4},
    {nome: 'Fernanda', nota: 10},
    {nome: 'Ana', nota: 6}
];

function selecionarAlunos(aprovacaoMedia, nomeDosAlunos) {
    return nomeDosAlunos.filter(aluno => aluno.nota >= aprovacaoMedia);
}

const alunosAprovados = selecionarAlunos(6, alunos);

console.log(alunosAprovados);
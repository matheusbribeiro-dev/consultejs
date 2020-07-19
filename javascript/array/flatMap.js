const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

const getNotaDoAluno = nAluno => nAluno.nota
const getNotaAlunosTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaAlunosTurma)
console.log(notas1)

//console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

notas2 = [].concat.apply([], notas1)
console.log(notas2)
-- Criação da tabela de administradores do site
create table adm_studentscool(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
)
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

-- criação da tabela de cadastro de escolas
create table cadastro_escolas(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    localizacao VARCHAR(255) NOT null,
    contato_alt VARCHAR(255),
    lvl_ensino VARCHAR(255) not null,
    qtd_turma int(255) not null,
    pre_cores VARCHAR(255) not null,
    dias_letivos VARCHAR(255) not null,
    horarios VARCHAR(255) not null,
    metodo_nota VARCHAR(255) not null,
    observacoes VARCHAR(255),
    aprovado BOOLEAN default false
)
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

-- Criação da tabela de contato
CREATE TABLE contato_msg_exemplo (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    mensagem TEXT NOT NULL
);

-- Tabela turmas
CREATE TABLE turmas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    EscolaID BIGINT NOT NULL,
    Turma VARCHAR(50) NOT NULL,
    Serie INT NOT NULL,
    CONSTRAINT fk_escola
        FOREIGN KEY (EscolaID)
        REFERENCES cadastro_escolas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Criação tabela "users" de cada escola
create table users_escola_exemplo(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf INT not null unique,
    telefone INT not null unique,
    senha VARCHAR(255) NOT null,
    authority ENUM('aluno', 'professor', 'admin') not null default 'aluno',    -- COLOCAR CHAVE ESTRANGEIRA NESSA PORRA
    turma VARCHAR(255), -- 3° A ou 3° B por exemplo
)
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO cadastro_escolas (
    nome,
    email,
    localizacao,
    contato_alt,
    lvl_ensino,
    qtd_turma,
    pre_cores,
    dias_letivos,
    horarios,
    metodo_nota,
    observacoes,
    aprovado
) VALUES (
    'Escola do Futuro',
    'contato@escolado futuro.com',
    'Rua dos Exemplos, 123, Centro',
    '(11) 98765-4321',
    'Ensino Médio',
    2,
    'Azul e Branco',
    'Segunda a Sexta-feira',
    '07:00 - 12:20',
    'Semestre',
    'Escola com foco em tecnologia e inovação.',
    TRUE
);

-- Adiciona todas as turmas para três séries do ensino médio

-- Para a 1ª série
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'A', 1);
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'B', 1);

-- Para a 2ª série
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'A', 2);
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'B', 2);

-- Para a 3ª série
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'A', 3);
INSERT INTO turmas (EscolaID, Turma, Serie) VALUES (1, 'B', 3);


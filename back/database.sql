-- Criação da tabela de administradores do site
create table adm_studentscool(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
)
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

-- Criação tabela "users" de cada escola
create table users_escola_exemplo(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf INT not null unique,
    telefone INT not null unique,
    senha VARCHAR(255) NOT null,
    authority ENUM('aluno', 'professor', 'admin') not null default 'aluno'
    -- COLOCAR CHAVE ESTRANGEIRA NESSA PORRA
    turma VARCHAR(255), -- 3° A ou 3° B por exemplo
)
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
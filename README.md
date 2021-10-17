**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio


# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuario administrador.


# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro
Deve ser possivel listar todas as especificações
Deve ser possivel listar todos os carros

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel um carro ter a mesma especificação mais de uma vez.
O usuário responsável pelo cadastro deve ser um usuario administrador.


# Cadastro de Imagem do carro

**RF**
Deve ser possivel cadastrar uma imagem do carro
Deve ser possivel listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuario administrador.


# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 hora.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
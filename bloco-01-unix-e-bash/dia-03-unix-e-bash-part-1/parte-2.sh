# Exercício 1
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2
cat countries.txt

# Exercício 3
less countries.txt
# Usar tecla n (next) e p (previous) para navegação e q (quit) para sair da navegação

# Exercício 4
less countries.txt
# Para buscar a ocorrência, usar /Zambia depois do comando

# Exercício 5
less countries.txt
# Para buscar a ocorrência, usar /Brazil depois do comando

# Exercicio 5
grep "Brazil" countries.txt

# Exercicio 6
grep -i "brazil" countries.txt
# O -i do comando ignora o caseSensitive padrão do terminal na hora da busca

# Exercicio 7
cat > phrases.txt
    # A repetição é a chave para o aprendizado.
    # A sabedoria não vem do acerto, mas do aprendizado com os erros.
    # O aprendizado é conhecimento, e conhecimento é liberdade e poder.
grep -v "fox" phrases.txt

# Exercicio 8
wc -w phrases.txt

# Exercicio 9
wc -l phrases.txt

# Exercicio 10
touch empty.tbt
touch empty.pdf

# Exercicio 11
ls

# Exercicio 12
ls *.txt

# Exercicio 13
ls *.tbt *.txt

# Exercicio 14
man ls
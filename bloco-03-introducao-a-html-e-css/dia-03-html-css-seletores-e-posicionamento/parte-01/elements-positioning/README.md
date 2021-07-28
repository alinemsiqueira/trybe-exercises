Incrível, né? Nessa aula, é notável o quanto posicionar elementos é importante e nos abre uma gama de possibilidades para estilizar uma página, movendo elementos utilizando propriedades como ```top``` e ```left``` . Foi possível observar também a propriedade ```absolute``` , que permite posicionar qualquer elemento de acordo com o elemento pai que tenha um ```position``` diferente. E por fim, vimos o ```z-index``` , que estabelece as camadas em que o objeto irá se posicionar, e o ```float``` , que lhe possibilita empurrar um elemento para a esquerda ou para a direita da página, permitindo que outras estruturas possam se organizar em torno dele.

# Para fixar

Que tal praticarmos como manipular o posicionamento de elementos? Utilize o HTML e CSS a seguir como ponto de partida para resolver os exercícios:

```index.html```

```
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Posicionamento de elementos</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
    <h1>Exercícios de fixação 3.3</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/2MV2bY0" alt="bowser" class="bowser" />
    <p class="speach">
    Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
    </body>
</html>
```

```style.css```

```
.super-mario {
    width: 200px;
}

.goomba {
    width: 100px;
}

.baloon {

}

.speach {
    font-size: 25px;
}

.bowser {
    width: 200px;
}
```

Personagens pertencentes à __Nintendo©__

1. Posicione o Mário acima do Goomba.

2. Posicione a tag ```p``` para que fique dentro do balão de fala.

3. Posicione o balão para que se torne uma fala de Bowser.
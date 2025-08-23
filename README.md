# yaml-doctor

Valide arquivos YAML facilmente em seus pipelines GitHub Actions.

## Como usar

Adicione ao seu workflow:

```yaml
- uses: darioajr/yaml-doctor@v1
  with:
    path: './seuarquivo.yaml'
```

## Inputs
- `path`: Caminho para o arquivo ou diretório YAML a ser validado. (Obrigatório)

## Exemplo de workflow
```yaml
name: Validação YAML
on:
  push:
    branches: [ main ]
jobs:
  yaml-doctor:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Valida YAML
        uses: darioajr/yaml-doctor@v1
        with:
          path: './seuarquivo.yaml'
```

## Licença
MIT

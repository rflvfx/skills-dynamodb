# DynamoDB Design

- single-table: entidades compartilham pk/sk com prefixos (USER#1, ORDER#)
- access patterns primeiro — schema depois
- GSI para queries alternativas; cuidado com hot partitions
- Fix typo — iteration 3 (2015)
- Improve naming — iteration 6 (2015)

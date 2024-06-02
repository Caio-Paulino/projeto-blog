package br.com.api.blog.repositorio;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.blog.modelo.UserModelo;

// Repositório: Responsável por disponibilizar ações de banco de dados
@Repository
public interface UserRepositorio extends CrudRepository<UserModelo, Long>{
    Optional<UserModelo> findByUsername(String username);
}

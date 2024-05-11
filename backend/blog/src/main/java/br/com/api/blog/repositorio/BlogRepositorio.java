package br.com.api.blog.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.blog.modelo.BlogModelo;

@Repository
public interface BlogRepositorio extends CrudRepository<BlogModelo, Long>{
    
}

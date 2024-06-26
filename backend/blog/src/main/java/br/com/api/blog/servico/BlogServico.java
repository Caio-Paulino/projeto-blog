package br.com.api.blog.servico;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.blog.modelo.BlogModelo;
import br.com.api.blog.modelo.RespostaModelo;
import br.com.api.blog.repositorio.BlogRepositorio;

// Serviço: Camada que faz a ponte entre o Modelo e Repositório
@Service
public class BlogServico {
    
    @Autowired // Autowired: Injeção de dependências
    private BlogRepositorio br; // Objeto de acesso a ações SQL no repositório

    @Autowired 
    private RespostaModelo rm; // Responsável por retornar ao usuário um feedback caso falte algo

    // Método de listagem 
    // Iterable: interface usada para coleção de elementos
    public Iterable<BlogModelo> listar(){
        return br.findAll(); 
    }

    // Método de listagem por Id 
    // Optional: Representa valor que pode ou não estar presente
    public Optional<BlogModelo> listarPorId(long id) {
        return br.findById(id);
    }

    // Método para cadastrar post
    public ResponseEntity<?> criarPost(BlogModelo bm) {

        if(bm.getTitulo().equals("")) {
            rm.setMensagem("O título é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if(bm.getResumo().equals("")) {
            rm.setMensagem("O resumo é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if(bm.getPostagem().equals("")) {
            rm.setMensagem("A postagem é obrigatória!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if(bm.getAutor().equals("")) {
            rm.setMensagem("O autor é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<BlogModelo>(br.save(bm), HttpStatus.CREATED);
        }
    }

    // Método para apagar post
    public boolean deletar(long id) {
        Optional<BlogModelo> blogmodeloOptional = br.findById(id);
        if(blogmodeloOptional.isEmpty()) {
            return false;
        }
        br.deleteById(id);
        return true;
    }
}

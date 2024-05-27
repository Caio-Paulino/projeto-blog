package br.com.api.blog.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

// Camada Modelo: Responsável por armazenagem e manipulação de dados

@Entity
@Table(name="blog")
@Getter
@Setter
public class BlogModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String resumo;
    private String postagem;
    private String autor;
}

// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casa-do-codigo$1.0.0/src/app/views/books/listing/listing.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Casa do Código</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Listagem dos livros</h1> ");

  if (data.error) {
    out.w("<span>" +
      marko_escapeXml(data.error) +
      "</span>");
  }

  out.w(" ");

  if (!data.error) {
    out.w("<table id=\"livros\"><tr><td>ID</td><td>Título</td><td>Preço</td><td>Editar</td><td>Remover</td></tr>");

    var for__16 = 0;

    marko_forEach(data.livros, function(livro) {
      var keyscope__17 = "[" + ((for__16++) + "]");

      out.w("<tr id=\"livro_" +
        marko_escapeXmlAttr(livro.id) +
        "\"> <td>" +
        marko_escapeXml(livro.id) +
        "</td><td>" +
        marko_escapeXml(livro.titulo) +
        "</td><td>" +
        marko_escapeXml(livro.preco) +
        "</td><td><a href=\"livros/form/" +
        marko_escapeXmlAttr(livro.id) +
        "\">Editar</a></td> <td><a href=\"#\" data-ref=\"" +
        marko_escapeXmlAttr(livro.id) +
        "\" data-type=\"remocao\">Remover</a></td> </tr>");
    });

    out.w("</table>");
  }

  out.w(" <script src=\"static/js/remove-livro.js\">\r\n        </script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casa-do-codigo$1.0.0/src/app/views/books/listing/listing.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };

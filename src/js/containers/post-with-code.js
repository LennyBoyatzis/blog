import React, { Component } from 'react';
import '../../styles/containers/post.css';
import '../../../node_modules/highlight.js/styles/hybrid.css';
import diagram from '../../../public/diagram-1.png'

const Highlight = require('react-highlight');

const codeSnippet = `
import tensorflow as tf
import data_utils
import seq2seq_model

def train():
    enc_train, dec_train = data_utils.prepare_custom_data(
        gConfig['working_directory'])

    train_set = read_data(enc_train, dec_train)

def seq2seq_f(encoder_inputs, decoder_inputs, do_decode):
    return tf.nn.seq2seq.embedding_attention_seq2seq(
        encoder_inputs, decoder_inputs, cell,
        num_encoder_symbols=source_vocab_size,
        num_decoder_symbols=target_vocab_size,
        embedding_size=size,
        output_projection=output_projection,
        feed_previous=do_decode)

with tf.Session(config=config) as sess:

    model = create_model(sess, False)

    while True:
        sess.run(model)

        checkpoint_path = os.path.join(gConfig['working_directory'], "seq2seq.ckpt")
        model.saver.save(sess, checkpoint_path, global_step=model.global_step)
`

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">Intro to Reinforcement Learning?</h1>
        <div className="code-sample">
          <Highlight className="python">
            {codeSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          Type Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quippe: habes enim a rhetoribus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet? Type Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quippe: habes enim a rhetoribus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?
        </p>
        <p className="post-content">
          Type Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quippe: habes enim a rhetoribus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet? Type Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quippe: habes enim a rhetoribus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?
        </p>
        <img src={diagram} alt="diagram" width="660"/>
      </div>
    );
  }
}

// This file is automatically generated, do not edit
goog.provide('ol.renderer.webgl.vectorlayer2.shader.LineStringCollection');

goog.require('ol.webgl.shader');



/**
 * @constructor
 * @extends {ol.webgl.shader.Fragment}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment = function() {
  goog.base(this, ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.SOURCE);
};
goog.inherits(ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment, ol.webgl.shader.Fragment);
goog.addSingletonGetter(ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.DEBUG_SOURCE = 'precision highp float;\nuniform vec4 u_color;\n\nvoid main(void) {\n  gl_FragColor = u_color;\n}\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.OPTIMIZED_SOURCE = 'precision highp float;uniform vec4 c;void main(void){gl_FragColor=c;}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.DEBUG_SOURCE :
    ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionFragment.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @extends {ol.webgl.shader.Vertex}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex = function() {
  goog.base(this, ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.SOURCE);
};
goog.inherits(ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex, ol.webgl.shader.Vertex);
goog.addSingletonGetter(ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.DEBUG_SOURCE = 'attribute vec2 a_position;\nuniform mat4 u_modelViewMatrix;\n\nvoid main(void) {\n  gl_Position = u_modelViewMatrix * vec4(a_position, 0., 1.);\n}\n\n\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.OPTIMIZED_SOURCE = 'attribute vec2 a;uniform mat4 b;void main(void){gl_Position=b*vec4(a,0.,1.);}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.DEBUG_SOURCE :
    ol.renderer.webgl.vectorlayer2.shader.LineStringCollectionVertex.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 */
ol.renderer.webgl.vectorlayer2.shader.LineStringCollection.Locations = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_color = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_color' : 'c');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_modelViewMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_modelViewMatrix' : 'b');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_position' : 'a');
};

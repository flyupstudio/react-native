if(!Uint8Array.prototype.slice)
{
  Uint8Array.prototype.slice = function(a,b){
    var Uint8ArraySlice = new Uint8Array(this.buffer.slice(a,b));
    return Uint8ArraySlice;
  }
}

var DomElement = (function () {
    function DomElement(proto, element /* element */, contentTag) {
        this.proto = proto;
        this.element = element;
        this.contentTag = contentTag;
    }
    return DomElement;
})();
exports.DomElement = DomElement;

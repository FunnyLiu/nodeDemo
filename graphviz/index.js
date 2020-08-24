
const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

const graph = `
digraph {
    rankdir="LR"
    labelloc="t"
    label="request"
    // Default styles
    graph [fontsize=16 fontname="Roboto Condensed, sans-serif"]
    node [shape=box style=rounded fontname="Roboto Condensed, sans-serif" fontsize=11 height=0 width=0 margin=.04]
    edge [fontsize=10, fontname="Roboto Condensed, sans-serif" splines="polyline"]
    
    
    // Nodes & per-node styling
    "request@2.88.2"
    "safe-buffer@5.2.1"
    "performance-now@2.1.0"
    "aws-sign2@0.7.0"
    "extend@3.0.2"
    "forever-agent@0.6.1"
    "aws4@1.10.1"
    "http-signature@1.2.0"
    "combined-stream@1.0.8"
    "isstream@0.1.2"
    "caseless@0.12.0"
    "json-stringify-safe@5.0.1"
    "oauth-sign@0.9.0"
    "tunnel-agent@0.6.0"
    "mime-types@2.1.27"
    "is-typedarray@1.0.0"
    "form-data@2.3.3"
    "qs@6.5.2"
    "tough-cookie@2.5.0"
    "har-validator@5.1.5"
    "mime-db@1.44.0"
    "punycode@2.1.1"
    "delayed-stream@1.0.0"
    "jsprim@1.4.1"
    "asynckit@0.4.0"
    "assert-plus@1.0.0"
    "psl@1.8.0"
    "ajv@6.12.4"
    "har-schema@2.0.0"
    "uuid@3.4.0"
    "sshpk@1.16.1"
    "json-schema@0.2.3"
    "fast-deep-equal@3.1.3"
    "fast-json-stable-stringify@2.1.0"
    "json-schema-traverse@0.4.1"
    "uri-js@4.2.2"
    "verror@1.10.0"
    "extsprintf@1.3.0"
    "safer-buffer@2.1.2"
    "bcrypt-pbkdf@1.0.2"
    "asn1@0.2.4"
    "dashdash@1.14.1"
    "ecc-jsbn@0.1.2"
    "jsbn@0.1.1"
    "getpass@0.1.7"
    "core-util-is@1.0.2"
    "tweetnacl@0.14.5"
    "extsprintf@1.4.0"
    
    // Edges & per-edge styling
    "request@2.88.2" -> "safe-buffer@5.2.1" [color=black]
    "request@2.88.2" -> "performance-now@2.1.0" [color=black]
    "request@2.88.2" -> "aws-sign2@0.7.0" [color=black]
    "request@2.88.2" -> "extend@3.0.2" [color=black]
    "request@2.88.2" -> "forever-agent@0.6.1" [color=black]
    "request@2.88.2" -> "aws4@1.10.1" [color=black]
    "request@2.88.2" -> "http-signature@1.2.0" [color=black]
    "request@2.88.2" -> "combined-stream@1.0.8" [color=black]
    "request@2.88.2" -> "isstream@0.1.2" [color=black]
    "request@2.88.2" -> "caseless@0.12.0" [color=black]
    "request@2.88.2" -> "json-stringify-safe@5.0.1" [color=black]
    "request@2.88.2" -> "oauth-sign@0.9.0" [color=black]
    "request@2.88.2" -> "tunnel-agent@0.6.0" [color=black]
    "tunnel-agent@0.6.0" -> "safe-buffer@5.2.1" [color=black]
    "request@2.88.2" -> "mime-types@2.1.27" [color=black]
    "request@2.88.2" -> "is-typedarray@1.0.0" [color=black]
    "request@2.88.2" -> "form-data@2.3.3" [color=black]
    "form-data@2.3.3" -> "combined-stream@1.0.8" [color=black]
    "form-data@2.3.3" -> "mime-types@2.1.27" [color=black]
    "request@2.88.2" -> "qs@6.5.2" [color=black]
    "request@2.88.2" -> "tough-cookie@2.5.0" [color=black]
    "request@2.88.2" -> "har-validator@5.1.5" [color=black]
    "mime-types@2.1.27" -> "mime-db@1.44.0" [color=black]
    "tough-cookie@2.5.0" -> "punycode@2.1.1" [color=black]
    "combined-stream@1.0.8" -> "delayed-stream@1.0.0" [color=black]
    "http-signature@1.2.0" -> "jsprim@1.4.1" [color=black]
    "form-data@2.3.3" -> "asynckit@0.4.0" [color=black]
    "http-signature@1.2.0" -> "assert-plus@1.0.0" [color=black]
    "jsprim@1.4.1" -> "assert-plus@1.0.0" [color=black]
    "tough-cookie@2.5.0" -> "psl@1.8.0" [color=black]
    "har-validator@5.1.5" -> "ajv@6.12.4" [color=black]
    "har-validator@5.1.5" -> "har-schema@2.0.0" [color=black]
    "request@2.88.2" -> "uuid@3.4.0" [color=black]
    "http-signature@1.2.0" -> "sshpk@1.16.1" [color=black]
    "sshpk@1.16.1" -> "assert-plus@1.0.0" [color=black]
    "jsprim@1.4.1" -> "json-schema@0.2.3" [color=black]
    "ajv@6.12.4" -> "fast-deep-equal@3.1.3" [color=black]
    "ajv@6.12.4" -> "fast-json-stable-stringify@2.1.0" [color=black]
    "ajv@6.12.4" -> "json-schema-traverse@0.4.1" [color=black]
    "ajv@6.12.4" -> "uri-js@4.2.2" [color=black]
    "uri-js@4.2.2" -> "punycode@2.1.1" [color=black]
    "jsprim@1.4.1" -> "verror@1.10.0" [color=black]
    "verror@1.10.0" -> "assert-plus@1.0.0" [color=black]
    "jsprim@1.4.1" -> "extsprintf@1.3.0" [color=black]
    "sshpk@1.16.1" -> "safer-buffer@2.1.2" [color=black]
    "sshpk@1.16.1" -> "bcrypt-pbkdf@1.0.2" [color=black]
    "sshpk@1.16.1" -> "asn1@0.2.4" [color=black]
    "asn1@0.2.4" -> "safer-buffer@2.1.2" [color=black]
    "sshpk@1.16.1" -> "dashdash@1.14.1" [color=black]
    "dashdash@1.14.1" -> "assert-plus@1.0.0" [color=black]
    "sshpk@1.16.1" -> "ecc-jsbn@0.1.2" [color=black]
    "ecc-jsbn@0.1.2" -> "safer-buffer@2.1.2" [color=black]
    "sshpk@1.16.1" -> "jsbn@0.1.1" [color=black]
    "ecc-jsbn@0.1.2" -> "jsbn@0.1.1" [color=black]
    "sshpk@1.16.1" -> "getpass@0.1.7" [color=black]
    "getpass@0.1.7" -> "assert-plus@1.0.0" [color=black]
    "verror@1.10.0" -> "core-util-is@1.0.2" [color=black]
    "sshpk@1.16.1" -> "tweetnacl@0.14.5" [color=black]
    "bcrypt-pbkdf@1.0.2" -> "tweetnacl@0.14.5" [color=black]
    "verror@1.10.0" -> "extsprintf@1.4.0" [color=black]
    
    }`;

// this is default, passing an empty object gives the same result
const renderOptions = { format:"svg" };

let viz = new Viz({ Module, render });

viz.renderString(graph, renderOptions)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    // Create a new Viz instance (@see Caveats page for more info)
    viz = new Viz({ Module, render });

    // Possibly display the error
    console.error(error);
  });
// MH: To find out matchId of a deprecation,
// run deprecationWorkflow.flushDeprecations() in the console.

console.log('MH: silence for all messages "remove handler info"');

self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchId: "remove-handler-infos" }
  ]
}

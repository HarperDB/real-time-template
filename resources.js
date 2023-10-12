/** Here we can define any JavaScript-based resources and extensions to tables
 
export class Topic extends tables.Topic {
	// we can define our own custom subscribe handler for doing things like returning previous messages
	async subscribe(options) {
		if (!options.startTime) // return last five messages
			options.previousCount = 5;
	}
}
 */

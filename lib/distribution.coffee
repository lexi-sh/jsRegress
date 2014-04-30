normal = require('./dist/normal')

Array.prototype.distribution = (dist) -> 
	switch dist
		when 'normal'
			normal.run(this)
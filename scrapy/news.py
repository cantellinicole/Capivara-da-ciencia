import scrapy

class ArticleSpider(scrapy.Spider):
	name = "articles"

	start_urls = [
		'https://jornal.usp.br/editorias/ciencias/ciencias-da-saude/',
		'https://jornal.usp.br/editorias/ciencias/ciencias-humanas/',
		'https://jornal.usp.br/editorias/ciencias/ciencias-exatas-e-da-terra/',
		'https://jornal.usp.br/editorias/ciencias/ciencias-ambientais/',
	]
	
	def parse(self, response):
		for article in response.css("article"):
			h4 = article.css("h4.arqu-tit")
			yield {
				'link': h4.css('a').attrib['href'],
			}
		page = response.url.split("/")[-2]
		filename = 'articles-%s.html' % page
		with open(filename, 'wb') as f:
			f.write(response.url, response.body)
		self.log('Saves file as %s' % filename)

{% if theme.ypyun %}
<br/>
<div class="site-author motion-element" itemprop="author" itemscope itemtype="http://schema.org/Person">
  <a href="https://www.upyun.com/" target="_blank"><img class="site-author-image" itemprop="image"
       src="{{ url_for( theme.ypyun_img ) }}"
       alt="{{ theme.ypyun_name }}" />
  <p class="site-author-name" itemprop="name">{{ theme.ypyun_name }}</p></a>
</div>
{% endif %}

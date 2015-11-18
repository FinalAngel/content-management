##################
Content Management
##################

django CMS
==========

Ensure python is installed and configured. Test with ``python --version``.

#. ``cd django-cms``
#. ``pip install virtualenv``
#. ``virtualenv env``
#. ``source env/bin/activate``
#. ``pip install -r requirements.txt``
#. ``python manage.py migrate``
#. ``python manage.py createsuperuser``
#. ``python manage.py runserver``

Open your browser at ``http://localhost:8000``.

Jekyll
======

Ensure ruby is installed and properly configured. There are some known issues on `OSX El Capitan 
<http://stackoverflow.com/questions/31972968/cant-install-gems-on-macos-x-el-capitan>`_.

#. ``gem install bundler`` (might not be required)
#. ``bundle install``
#. ``jekyll new gh-pages``
#. ``cd gh-pages``
#. ``jekyll serve --watch --baseurl ""``

Open your browser at ``http://localhost:4000``.

Resources
=========

- `Jekyll <https://help.github.com/articles/using-jekyll-with-pages/>`_
- `django CMS <docs.django-cms.org>`_
- `Clean Blog Theme <http://startbootstrap.com/template-overviews/clean-blog/>`_

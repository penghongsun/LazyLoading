var LazyLoading = function (wrapper, autoDestroy)
{
    var spos = 0,
        autoDestroy = typeof autoDestroy === 'undefined' ? true : autoDestroy,
        wrapper = wrapper || window,
        contents = [],
        ptr = 0,
        vh = wrapper.innerHeight || wrapper.clientHeight,
        sprop = typeof wrapper.scrollY === 'undefined' ? 'scrollTop' : 'scrollY';

    this.put = collection;

    (function initialize()
    {
        console.log('[*] Lazy loading...');
        collection((wrapper === window ? wrapper.document : wrapper).querySelectorAll('[data-src]')), proc();
        wrapper.addEventListener('scroll', lazyScrollEvent);
        wrapper.addEventListener('resize', lazyResizeEvent);
    })();

    function initValues()
    {
        vh = wrapper.innerHeight || wrapper.clientHeight;
    }

    function collection(nodeList)
    {
        if (!nodeList instanceof NodeList)
        {
            throw "Not found Nodelist";
        }

        for (var clen = contents.length, len = clen + nodeList.length, i = clen; i < len; i++)
        {
            contents[i] = nodeList[i];
        }

        contents.sort(function (a, b)
        {
            return a.offsetTop - b.offsetTop;
        });
    }

    function lazyScrollEvent()
    {
        var cspos = wrapper[sprop];
        if (cspos - spos > (vh / 4))
        {
            proc();
            spos = cspos;
        }
    }

    function lazyResizeEvent()
    {
        initValues(), proc();
    };

    function proc(force)
    {
        for (var i = ptr, threshold = vh + wrapper[sprop], len = contents.length; i < len; i++)
        {
            if (threshold >= contents[i].offsetTop - vh || force)
            {
                contents[i].setAttribute('src', contents[i].dataset['src']);
                delete contents[i].dataset['src'];
                if ((ptr = i + 1) === len)
                {
                    if (!force && autoDestroy)
                    {
                        destroy();
                    }
                }
            }
            else
            {
                break;
            }
        }
    }

    function destroy()
    {
        wrapper.removeEventListener('scroll', lazyScrollEvent);
        wrapper.removeEventListener('resize', lazyResizeEvent);

        proc(true);
        console.log('[*] Lazy loading cleared');
    }
};